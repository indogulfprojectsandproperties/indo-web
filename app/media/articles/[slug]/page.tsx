import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Clock, User, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { MEDIA_ARTICLES, getArticleBySlug } from "@/data/media";
import { BlockPattern } from "@/components/BlockPattern";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MEDIA_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | INDO GULF Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-softgrey pb-20">
      {/* Light Article Header */}
      <section className="bg-softgrey text-navy pt-28 sm:pt-36 pb-16 relative overflow-hidden border-b border-navy/5">
        <BlockPattern variant="corner" className="absolute top-12 right-12 hidden md:block opacity-60" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Link
            href="/media"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/70 hover:text-navy hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Media Hub</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber text-navy shadow-xs">
              {article.category}
            </span>
            <span className="text-navy/60 text-xs flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.publishedDate}</span>
            </span>
            <span className="text-navy/60 text-xs flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-navy/75 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-navy/60">
            <User className="w-3.5 h-3.5 text-cyan-dark" />
            <span>By {article.author}</span>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-navy/10 shadow-xs space-y-8">
          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-softgrey shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-navy max-w-none space-y-6 text-sm sm:text-base text-navy/80 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <BlockPattern variant="divider" />

          {/* Call to Action: Consult with Advisors */}
          <div className="p-6 sm:p-8 rounded-2xl bg-softgrey border border-navy/10 space-y-3">
            <h4 className="font-heading font-bold text-lg text-navy">
              Interested in Exploring This Opportunity?
            </h4>
            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
              Our investment advisory desk provides confidential consultation, financial models, and site inspection
              schedules for domestic and NRI investors.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-xs text-white bg-navy hover:bg-navy-700 transition-colors shadow-xs"
              >
                <span>Request Investor Briefing</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
