"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Sparkles, ShoppingBag, Star, ChevronRight, Truck, RefreshCw, ShieldCheck, Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "@/lib/store";
import {
  siteInfo, categories, products, blogPosts, getFeaturedProducts, formatPrice,
} from "@/lib/data";
import { ProductCard } from "@/components/site/product-card";

export function HomePage() {
  const navigate = useRouter((s) => s.navigate);
  const deals = getFeaturedProducts("deals");
  const popular = getFeaturedProducts("popular");
  const bestsellers = getFeaturedProducts("bestseller");
  const topCategories = ["google-play", "apple", "amazon", "steam", "free-fire", "pubg"];
  const recentBlogs = blogPosts.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-neon/20 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyber/15 blur-3xl" />
          <div className="absolute top-1/2 left-1/3 h-[300px] w-[300px] rounded-full bg-magenta/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/30 px-4 py-1.5 text-sm font-medium text-cyber mb-6"
              >
                <Sparkles className="h-4 w-4 text-neon" />
                <span>{siteInfo.tagline}</span>
              </motion.div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] tracking-tight text-balance">
                Digital online{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-neon">global game</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-cyber"
                    viewBox="0 0 200 12" fill="none" preserveAspectRatio="none"
                  >
                    <path d="M2 8 Q 50 2, 100 6 T 198 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                store for you.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                {siteInfo.heroSubtitle} Instant delivery on gaming top-ups, gift cards & digital services.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="h-13 px-7 rounded-full bg-gradient-to-r from-neon to-cyber hover:opacity-90 text-white shadow-neon text-base font-medium group"
                  onClick={() => navigate("shop")}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-7 rounded-full border-2 border-border bg-card/60 backdrop-blur text-foreground hover:bg-secondary text-base font-medium"
                  onClick={() => navigate("shop", { category: "free-fire" })}
                >
                  <Zap className="mr-2 h-5 w-5 text-neon" fill="currentColor" />
                  Free Fire Top-Up
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-5 max-w-lg mx-auto lg:mx-0">
                {[
                  { value: "44+", label: "Products" },
                  { value: "20+", label: "Categories" },
                  { value: "27+", label: "Articles" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-neon">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground/60 mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Floating game icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[380px] sm:h-[480px] lg:h-[520px]"
            >
              {/* Center disc */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px] rounded-full border-2 border-dashed border-neon/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="absolute h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px] rounded-full border border-cyber/30"
                />
                <div className="absolute h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-br from-neon/30 to-cyber/20 backdrop-blur-sm shadow-neon" />
              </div>

              {/* Center game controller */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="text-[140px] sm:text-[180px] drop-shadow-2xl select-none">🎮</div>
              </motion.div>

              {/* Floating cards */}
              {[
                { emoji: "🔥", label: "Free Fire", pos: "top-4 right-2 sm:right-6", color: "from-orange-500/30 to-red-500/20" },
                { emoji: "💎", label: "Diamonds", pos: "bottom-6 left-2 sm:left-6", color: "from-cyan-500/30 to-blue-500/20" },
                { emoji: "▶️", label: "Google Play", pos: "bottom-12 right-0 sm:right-2", color: "from-green-500/30 to-emerald-500/20" },
                { emoji: "📦", label: "Amazon", pos: "top-12 left-0 sm:left-2", color: "from-orange-600/30 to-amber-600/20" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  animate={{
                    y: [0, i % 2 === 0 ? -8 : 8, 0],
                    rotate: [0, i % 2 === 0 ? 3 : -3, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className={`absolute ${item.pos} z-30`}
                >
                  <div className={`relative bg-card rounded-2xl p-3 shadow-card border border-border/40 hover:scale-110 transition-transform`}>
                    <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl sm:text-3xl`}>
                      {item.emoji}
                    </div>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-medium text-foreground/70 bg-card px-1.5 py-0.5 rounded-md whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Discount badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="absolute top-12 left-0 sm:left-2 z-40"
              >
                <div className="relative bg-gradient-to-br from-magenta to-neon text-white rounded-full h-20 w-20 sm:h-24 sm:w-24 flex flex-col items-center justify-center shadow-neon rotate-[-12deg]">
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide">Up to</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold leading-none">23%</span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide">Off</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="relative -mt-2 z-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Truck, title: "Fast Delivery", desc: "For our all orders", color: "text-neon", bg: "bg-neon/10" },
              { icon: RefreshCw, title: "Instant Returns", desc: "If codes have problems", color: "text-cyber", bg: "bg-cyber/10" },
              { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure payment", color: "text-magenta", bg: "bg-magenta/10" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated support", color: "text-foreground", bg: "bg-foreground/10" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-card rounded-2xl p-4 sm:p-6 shadow-card border border-border/60 hover:shadow-neon hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                <div className={`inline-flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed truncate">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS OF THE DAY */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-magenta" fill="currentColor" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta">Hurry UP</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Deals Of The Day
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {deals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-card/40 to-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyber mb-3">
              Browse Categories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Top Categories Of The Month
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {topCategories.map((catId, i) => {
              const cat = categories.find((c) => c.id === catId);
              if (!cat) return null;
              return (
                <motion.button
                  key={catId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => navigate("shop", { category: catId })}
                  className="group relative overflow-hidden bg-card rounded-2xl border border-border/60 hover:border-neon/40 p-5 transition-all hover:-translate-y-1 hover:shadow-neon text-center"
                >
                  <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${cat.color} opacity-50 group-hover:scale-150 transition-transform duration-500`} />
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {cat.emoji}
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-semibold text-foreground">
                      {cat.name}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR GIFT CARDS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyber mb-3">
                Trending Now
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Popular Gift Cards
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 gap-3">
            {popular.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
            {popular.length < 4 && bestsellers.slice(0, 4 - popular.length).map((product, i) => (
              <ProductCard key={product.id} product={product} index={popular.length + i} />
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLER GAMING TOP-UP */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-card/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyber opacity-30" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-neon" fill="currentColor" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Top-Up</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Best Seller Gaming Top-Up
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("shop")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-5 gap-3">
            {bestsellers.slice(0, 4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyber mb-3">
                Read Our Blogs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                You&apos;re Gonna Love It
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate("blog")}
              className="rounded-full border-border hover:bg-secondary text-sm font-medium group hidden sm:inline-flex"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {recentBlogs.map((post, i) => (
              <motion.button
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => navigate("blog-single", { blogId: post.id })}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-card hover:shadow-neon transition-all hover:-translate-y-1 flex flex-col text-left"
              >
                <div className={`relative h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="text-6xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    {post.emoji}
                  </span>
                  <Badge className="absolute top-3 left-3 bg-card/90 text-foreground border-0 text-[10px] font-semibold">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="font-display text-base font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-cyber transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 text-sm font-medium text-cyber inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />
    </>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neon via-magenta to-cyber p-8 sm:p-12 lg:p-16 shadow-neon"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-8 right-8 text-7xl opacity-20 select-none">🎮</div>
          <div className="absolute bottom-8 left-8 text-5xl opacity-15 select-none">⚡</div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-medium text-white mb-5">
                <Sparkles className="h-4 w-4" />
                <span>Exclusive deals & instant alerts</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
                Join the BD71SHOP community
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/90 max-w-lg text-pretty">
                Subscribe to get notified about flash deals, new arrivals, and gaming top-up discounts.
              </p>
            </div>

            <div className="lg:justify-end">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/95 backdrop-blur rounded-2xl p-6 text-center max-w-md mx-auto lg:ml-auto"
                >
                  <div className="h-14 w-14 rounded-full bg-cyber/15 text-cyber flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-7 w-7" fill="currentColor" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    Subscribed! 🎉
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for joining! Watch your inbox for exclusive deals.
                  </p>
                </motion.div>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-3 lg:justify-end"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-13 px-5 rounded-full bg-white/95 backdrop-blur text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-4 focus:ring-white/30 min-w-0 sm:min-w-[280px] lg:min-w-[300px] text-sm font-medium"
                    aria-label="Email address"
                  />
                  <Button
                    type="submit"
                    className="h-13 px-7 rounded-full bg-foreground hover:bg-foreground/90 text-background text-sm font-semibold whitespace-nowrap"
                  >
                    Subscribe Now
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
