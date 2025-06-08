import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t, i18n } = useTranslation();

  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: t("contactUs.form.contactFormErrors.firstNameRequired"),
    }),
    lastName: z.string().min(2, {
      message: t("contactUs.form.contactFormErrors.lastNameRequired"),
    }),
    email: z.string().email({
      message: t("contactUs.form.contactFormErrors.invalidEmail"),
    }),
    phone: z
      .string()
      .min(10, { message: t("contactUs.form.contactFormErrors.invalidPhone") }),
    message: z.string().min(10, {
      message: t("contactUs.form.contactFormErrors.messageTooShort"),
    }),
  });
  type FormValues = z.infer<typeof formSchema>;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError("");
    const locale = i18n.language;

    try {
      const response = await fetch(`/${locale}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t("contactUs.form.Faild"));
      }

      setSubmitSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 container mx-auto px-4 pb-26">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start">
          <div className="w-full max-w-2xl flex-1">
            <div className="mb-12">
              <div className="mb-4 text-4xl font-bold">
                {t("home.contact.heading")}
              </div>
              <div className="text-lg text-gray-300">
                {t("home.contact.description")}
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {i18n.language === "ar" ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder={t("contactUs.form.fields.lastName")}
                      className={clsx(
                        "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                        "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                        errors.lastName ? "border-red-500" : "border-white/20"
                      )}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t("contactUs.form.fields.firstName")}
                      className={clsx(
                        "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                        "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                        errors.firstName ? "border-red-500" : "border-white/20"
                      )}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder={t("contactUs.form.fields.firstName")}
                      className={clsx(
                        "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                        "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                        errors.firstName ? "border-red-500" : "border-white/20"
                      )}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t("contactUs.form.fields.lastName")}
                      className={clsx(
                        "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                        "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                        errors.lastName ? "border-red-500" : "border-white/20"
                      )}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div>
                <input
                  type="email"
                  placeholder={t("contactUs.form.fields.email")}
                  className={clsx(
                    "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                    "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                    errors.email ? "border-red-500" : "border-white/20"
                  )}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder={t("contactUs.form.fields.phone")}
                  className={clsx(
                    "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                    "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                    errors.phone ? "border-red-500" : "border-white/20"
                  )}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  placeholder={t("contactUs.form.fields.message")}
                  rows={5}
                  className={clsx(
                    "w-full rounded-md border bg-black/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm",
                    "focus:border-[#eccc68] focus:ring-1 focus:ring-[#F2D05E] focus:outline-none",
                    errors.message ? "border-red-500" : "border-white/20"
                  )}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-[#eccc68] py-3 text-center font-medium text-black transition-all hover:bg-white disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  t("contactUs.form.fields.submit")
                )}
              </button>

              {submitSuccess && (
                <div className="rounded-md bg-green-500/20 p-3 text-center text-green-300">
                  {t("contactUs.form.Succesful")}
                </div>
              )}

              {submitError && (
                <div className="rounded-md bg-red-500/20 p-3 text-center text-red-300">
                  {submitError}
                </div>
              )}
            </form>
          </div>
          <div className="flex flex-1 justify-center self-center lg:justify-end">
            <Image
              src="/images/contacts.png"
              alt="alogza"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
