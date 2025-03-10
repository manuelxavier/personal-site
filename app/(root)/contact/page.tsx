import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title="Demo"
      description="test description"
    >
      <div className="flex flex-col lg:flex-row">
       <h1>Contact</h1>
      </div>
    </PageContainer>
  );
}
