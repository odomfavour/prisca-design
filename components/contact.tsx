"use client";

import {
  CheckCircle2,
  File as FileIcon,
  Mail,
  MailOpen,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  BehanceIcon,
  DribbbleIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "./brand-icons";

const socials = [
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com",
    label: "LinkedIn",
    darkColor: "dark:text-[#0A66C2]",
  },
  {
    icon: DribbbleIcon,
    href: "https://dribbble.com",
    label: "Dribbble",
    darkColor: "dark:text-[#EA4C89]",
  },
  {
    icon: BehanceIcon,
    href: "https://behance.net",
    label: "Behance",
    darkColor: "dark:text-[#1769FF]",
  },
  {
    icon: YoutubeIcon,
    href: "https://youtube.com",
    label: "YouTube",
    darkColor: "dark:text-[#FF0000]",
  },
];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent dark:border-neutral-300 dark:bg-white dark:text-neutral-900 dark:placeholder:text-neutral-400";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted dark:gap-1.5 dark:border-white dark:bg-white dark:py-1 dark:pl-1.5 dark:pr-2.5 dark:text-neutral-900">
            <span className="h-1.5 w-1.5 rounded-full bg-accent dark:hidden" />
            <span className="hidden h-3.5 w-3.5 items-center justify-center rounded-full bg-accent/20 dark:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Contact Me
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold dark:font-sans dark:font-semibold dark:tracking-tight dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted dark:text-white/90 sm:text-base">
            Have a project in mind, a role to fill, or a conversation to start?
            I&apos;m always open to meaningful collaborations.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label, darkColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2 dark:rounded-xl dark:border-white dark:bg-white dark:hover:bg-neutral-200"
              >
                <Icon className={`h-4 w-4 dark:h-5 dark:w-5 ${darkColor}`} />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@priscadesign.com"
              className="flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground h-[42px] rounded-lg dark:text-base dark:font-medium"
            >
              <Mail className="h-4 w-4 dark:hidden" />
              <MailOpen className="hidden h-5 w-5 dark:block" /> Send an Email
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border  bg-surface px-6 py-3 text-sm font-semibold text-accent border-accent hover:bg-surface-2 h-[42px] rounded-lg dark:border-accent dark:bg-white dark:px-4 dark:py-0 dark:text-base dark:font-medium dark:text-accent dark:hover:bg-neutral-200"
            >
              <FileIcon className=" h-5 w-5 block border-accent" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-surface p-6 dark:rounded-xl dark:border-transparent dark:bg-[#f0eeff] sm:p-8">
          <h3 className="font-display text-lg font-bold dark:font-sans dark:font-semibold dark:text-neutral-900">
            Get in touch
          </h3>
          <p className="mt-1 text-sm text-muted dark:text-neutral-500">
            Use the form to reach out about roles, projects, or collaborations.
          </p>

          {status === "success" ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-border bg-background py-10 text-center dark:border-neutral-200 dark:bg-white">
              <CheckCircle2 className="h-8 w-8 text-accent" />
              <p className="font-semibold dark:text-neutral-900">
                Message sent
              </p>
              <p className="max-w-xs text-sm text-muted dark:text-neutral-500">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-semibold text-accent"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium dark:text-neutral-900"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
                  placeholder="Enter Full Name"
                  className={inputClass}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium dark:text-neutral-900"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
                  placeholder="Enter Email Address"
                  className={inputClass}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium dark:text-neutral-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={values.message}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, message: e.target.value }))
                  }
                  placeholder="Tell me a bit about the project or role..."
                  rows={4}
                  className={`${inputClass} resize-none dark:min-h-40`}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again in a moment.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity disabled:opacity-60 dark:rounded-lg dark:font-medium"
              >
                <Send className="h-4 w-4 dark:hidden" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
