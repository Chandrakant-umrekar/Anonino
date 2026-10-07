"use client";
import React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  EyeOff,
  Link2,
  Lock,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import messages from "@/message.json";

const gradientText =
  "bg-gradient-to-r from-[#ff4500] to-[#ff8c00] dark:from-[#ff5e57] dark:to-[#ff7849] text-transparent bg-clip-text";
const gradientBg =
  "bg-gradient-to-r from-[#ff4500] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#ff4500]";

const features = [
  {
    icon: EyeOff,
    title: "Truly anonymous",
    text: "No names, no traces. Senders never have to reveal who they are.",
  },
  {
    icon: Link2,
    title: "One shareable link",
    text: "Get your personal link and drop it in your bio, chats or stories.",
  },
  {
    icon: ShieldCheck,
    title: "You stay in control",
    text: "Turn message acceptance on or off whenever you like.",
  },
  {
    icon: Zap,
    title: "Instant & lightweight",
    text: "Fast to set up, fast to send. Messages land in your dashboard right away.",
  },
];

const steps = [
  {
    icon: Lock,
    title: "Create your account",
    text: "Sign up or log in to get your custom link.",
  },
  {
    icon: Link2,
    title: "Share your link",
    text: "Send it to friends, followers or colleagues and let them speak freely.",
  },
  {
    icon: MessageCircle,
    title: "Receive honest feedback",
    text: "Sit back and read candid messages from others in your dashboard.",
  },
];

const Home = () => {
  return (
    <main className="relative flex-grow overflow-hidden text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* Decorative background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#ff4500]/20 blur-3xl dark:bg-[#ff5e57]/15" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#ff8c00]/20 blur-3xl dark:bg-[#ff7849]/10" />
        <div className="absolute top-2/3 -left-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-14 md:px-8 md:py-20">
        {/* HERO */}
        <section className="mb-16 max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-orange-600 shadow-sm backdrop-blur dark:border-orange-500/30 dark:bg-gray-900/60 dark:text-orange-300">
            <Sparkles className="h-4 w-4" />
            Say it honestly. Stay anonymous.
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-800 dark:text-gray-50 md:text-6xl">
            Discover the Power of{" "}
            <span className={gradientText}>Anonymous</span> Feedback
          </h1>

          <h2 className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            Empower your voice without revealing your identity at{" "}
            <span className={`${gradientText} font-semibold`}>Anonino</span>
          </h2>

          <p className="sr-only">
            Anonino is an anonymous messaging platform built by Chandrakant
            Umrekar, a software developer.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className={`group inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:shadow-orange-500/20 ${gradientBg}`}
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex items-center rounded-xl border border-gray-300 bg-white/70 px-8 py-3.5 text-lg font-semibold text-gray-700 backdrop-blur transition-all duration-300 hover:border-[#ff4500] hover:text-[#ff4500] dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-200 dark:hover:border-[#ff8c00] dark:hover:text-[#ff8c00]"
            >
              I already have an account
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            {[
              "Free to use",
              "No identity required",
              "Set up in under a minute",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#ff4500] dark:text-[#ff8c00]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* MESSAGE CAROUSEL */}
        <section className="mb-20 w-full max-w-3xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            A peek at what people say
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-xl backdrop-blur transition-all duration-300 hover:border-orange-300 dark:border-gray-700 dark:bg-gray-800/80 dark:shadow-gray-900/50 dark:hover:border-orange-500/50">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff4500] to-[#ff8c00]" />
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
              className="p-2 pt-4"
            >
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-col items-center justify-center p-4 md:p-6"
                  >
                    <Card className="w-full rounded-xl border-gray-200 bg-gray-50 shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:shadow-gray-800/50">
                      <CardHeader className="items-center gap-2 pb-2 text-center">
                        <Quote className="h-7 w-7 text-[#ff4500]/70 dark:text-[#ff8c00]/70" />
                        <span className="text-xl font-bold text-gray-800 dark:text-gray-50">
                          {message.title}
                        </span>
                      </CardHeader>
                      <CardContent className="px-6 pb-8 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
                        {message.content}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700 sm:flex" />
              <CarouselNext className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 backdrop-blur-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-700 sm:flex" />
            </Carousel>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-20 w-full">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 md:text-4xl">
              Why people love <span className={gradientText}>Anonino</span>
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Simple, private and built for honest conversations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/80 dark:hover:border-orange-500/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff4500] to-[#ff8c00] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 dark:from-[#ff5e57] dark:to-[#ff7849]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-20 w-full max-w-5xl rounded-3xl border border-gray-200 bg-white/80 px-6 py-12 text-center shadow-xl backdrop-blur transition-all duration-300 hover:border-orange-300 dark:border-gray-700 dark:bg-gray-800/80 dark:shadow-gray-900/50 dark:hover:border-orange-500/50 md:px-10">
          <h2 className="mb-12 text-3xl font-bold text-gray-800 dark:text-gray-50 md:text-4xl">
            How to Use <span className={gradientText}>Anonino</span>
          </h2>
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-8 hidden h-0.5 bg-gradient-to-r from-[#ff4500]/40 via-[#ff8c00]/40 to-[#ff4500]/40 md:block"
            />
            {steps.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="group relative flex flex-col items-center"
              >
                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#ff4500] to-[#ff8c00] text-white shadow-lg transition-transform duration-200 group-hover:scale-110 dark:from-[#ff5e57] dark:to-[#ff7849]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-xs font-bold text-white dark:border-gray-800 dark:bg-white dark:text-gray-900">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
                <p className="max-w-xs text-base text-gray-600 dark:text-gray-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#ff4500] to-[#ff8c00] px-6 py-12 text-center text-white shadow-2xl shadow-orange-500/20 dark:from-[#ff5e57] dark:to-[#ff7849] md:py-16">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          />
          <h2 className="relative text-3xl font-extrabold md:text-4xl">
            Ready to hear what people really think?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/90">
            Create your link in seconds and start receiving honest, anonymous
            messages today.
          </p>
          <Link
            href="/sign-up"
            className="group relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-[#ff4500] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Create my link
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
