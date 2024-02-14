import { t } from "i18next";
import {
  news,
  cooperation,
  document,
  research,
  experiment,
  volunteers,
  scholarship,
  funding,
  course,
  donations,
  code,
  essay,
  congratulations,
  summery,
  shortStory,
  product,
  event,
  announcement,
  quotation,
  story,
  questionnaire,
} from "../../assets/images/icons/categories";

export const forms = [
  {
    formName: "Add News",
    formTitle: "News",
    formIcon: news,
    formFields: [
      {
        label: "news_title",
        type: "text",
        name: "News Title",
        state: "news_title",
      },
      {
        label: "Date",
        type: "date",
        name: "Date",
        state: "date",
      },
      {
        label: "Details",
        type: "textarea",
        name: "Details",
        state: "details",
      },
      {
        label: "Source URL",
        type: "url",
        name: "Url",
        state: "url",
      },
      {
        label: "Upload file",
        type: "file",
        name: "File",
        state: "file",
      },
    ],
  },
  {
    formName: "Suggest Cooperation",
    formIcon: cooperation,
    formTitle: "Cooperation",
    formFields: [
      {
        label: "Category",
        type: "text",
        name: "Project Title",
        state: "project_title",
      },
      {
        label: "details",
        type: "textarea",
        name: "Details",
        state: "details",
      },
      {
        label: "skills",
        type: "textarea",
        name: "skills",
        state: "skills",
      },
      {
        label: "members",
        type: "text",
        name: "members",
        state: "members",
      },
      {
        label: "Date",
        type: "date",
        name: "Date",
        state: "date",
      },

      {
        label: "Upload file",
        type: "file",
        name: "File",
        state: "file",
      },
    ],
  },
  {
    formName: "Document Check up",
    formTitle: "Document Check up",
    formIcon: document,
    formFields: [
      {
        label: "Category",
        type: "select",
        name: "Documentation type",
        state: "documentation_type",
        select: ["Scientific", "Scientific"],
      },
      { label: "Details", type: "textarea", name: "Details", state: "details" },
      { label: "Deadline", type: "date", name: "Deadline", state: "deadline" },
      { label: "Upload file", type: "file", name: "File", state: "file" },
    ],
  },
  {
    formName: "Scientific Research Summary",
    formTitle: "Research",
    formIcon: research,
    formFields: [
      { label: "title", type: "text", name: "Title", state: "title" },
      { label: "summary", type: "text", name: "Summary", state: "summary" },
      {
        label: "importance",
        type: "textarea",
        name: "Importance",
        state: "importance",
      },

      {
        label: "authors",
        type: "text",
        name: "Authors",
        state: "authors",
      },
      {
        label: "url",
        type: "url",
        name: "Url",
        state: "url",
      },
      { label: "Date", type: "date", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "file" },
    ],
  },
  {
    formName: "Add a Science Experiment",
    formTitle: "Experiment",
    formIcon: experiment,
    formFields: [
      { label: "title", type: "text", name: "Title", state: "title" },
      { label: "tools", type: "text", name: "Tools", state: "tools" },
      {
        label: "steps",
        type: "number",
        name: "Steps",
        state: "steps",
      },
      {
        label: "discussion",
        type: "number",
        name: "Discussion",
        state: "discussion",
      },
      {
        label: "references",
        type: "url",
        name: "References",
        state: "references",
      },
      {
        label: "authors",
        type: "text",
        name: "Authors",
        state: "authors",
      },
      {
        label: "url",
        type: "url",
        name: "Url",
        state: "url",
      },
      { label: "Date", type: "date", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "file" },
    ],
  },
  {
    formName: "Request For Volunteers or Trainees",
    formTitle: "Volunteers",
    formIcon: volunteers,
    formFields: [
      {
        label: "how_apply",
        type: "text",
        name: "How to apply",
        state: "how_apply",
      },
      { label: "skills", type: "text", name: "Skills", state: "skills" },
      { label: "Place", type: "text", name: "Place", state: "place" },
      { label: "Details", type: "textarea", name: "Details", state: "details" },

      {
        label: "Paid Or Free",
        type: "select",
        name: "Paid Or Free",
        state: "paid_or_free",
        select: ["paid", "free"],
      },
      { label: "Upload file", type: "file", name: "Fate", state: "file" },
    ],
  },
  {
    formName: "Scholarship Announcement",
    formTitle: "Scholarship",
    formIcon: scholarship,
    formFields: [
      {
        label: "Announcement Name",
        type: "text",
        name: "Announcement Name",
        state: "name",
      },
      {
        label: "Name Of Organization",
        type: "text",
        name: "Name Of Organization",
        state: "organization",
      },

      {
        label: "Details Of Scholarship",
        type: "textarea",
        name: "Details Of Scholarship",
        state: "details",
      },
      {
        label: "Conditions",
        name: "Conditions",
        type: "text",
        state: "conditions",
      },
      { label: "Deadline", name: "Deadline", type: "date", state: "deadline" },
      {
        label: "Upload file",
        name: "Upload file",
        type: "file",
        state: "file",
      },
    ],
  },
  {
    formName: "Project Funding",
    formTitle: "Project Support",
    formIcon: funding,
    formFields: [
      {
        label: "Name of project",
        type: "text",
        name: "Name of project",
        state: "name",
      },
      {
        label: "Name Of Funding Organization",
        type: "text",
        name: "Name Of Funding Organization",
        state: "organization",
      },
      { label: "Details", type: "textarea", name: "Details", state: "details" },
      { label: "Deadline", type: "date", name: "Deadline", state: "deadline" },
      {
        label: "Upload file",
        type: "file",
        name: "Upload file",
        state: "file",
      },
    ],
  },
  {
    formName: "Announcing Course",
    formTitle: "Announcing For Course",
    formIcon: funding,
    formFields: [
      {
        label: "Name Of Funding Organization",
        type: "text",
        name: "Organization",
        state: "organization",
      },
      {
        label: "Name of project",
        type: "text",
        name: "Course Name",
        state: "name",
      },
      { label: "price", type: "number", name: "Price", state: "price" },
      { label: "email", type: "email", name: "Email", state: "email" },
      { label: "Details", type: "textarea", name: "Details", state: "details" },
      {
        label: "Upload file",
        type: "file",
        name: "Upload file",
        state: "file",
      },
    ],
  },
  {
    formName: "Request for a scientific service",
    formTitle: "Request for service",
    formIcon: funding,
    formFields: [
      {
        label: "Service Name with times",
        type: "text",
        name: "Course Name",
        state: "name",
      },
      { label: "price", type: "number", name: "Price", state: "price" },
      { label: "email", type: "email", name: "Email", state: "email" },
      { label: "Details", type: "textarea", name: "Details", state: "details" },
      {
        label: "Upload file",
        type: "file",
        name: "Upload file",
        state: "file",
      },
    ],
  },

  {
    formName: "Donations",
    formTitle: "Donation",
    formIcon: donations,
    formFields: [
      { label: "Date", type: "date", name: "Date", state: "date" },
      {
        label: "Donation Type",
        type: "text",
        name: "Donation Type",
        state: "type",
      },
      { label: "Details", type: "textarea", name: "Details", state: "details" },
      {
        label: "Target People",
        type: "text",
        name: "Target People",
        state: "people",
      },
      {
        label: "Delivery mechanism",
        type: "text",
        name: "Delivery mechanism",
        state: "delivery_mechanism",
      },
      { label: "Upload file", type: "file", name: "File", state: "file" },
    ],
  },
  {
    formName: "Code Inquiry",
    formTitle: "Code Inquiry",
    formIcon: code,
    formFields: [
      {
        label: "Inquiry Title",
        type: "text",
        name: "Inquiry Title",
        state: "title",
      },
      { label: "Code", type: "textarea", name: "Code", state: "code" },
      { label: "Code Type", type: "text", name: "Code Type", state: "type" },
      {
        label: "Upload file",
        type: "file",
        name: "Upload file",
        state: "file",
      },
    ],
  },
  {
    formName: "Add Essay",
    formTitle: "Add Essay",
    formIcon: essay,
    formFields: [
      { label: "Date", type: "date", name: "Date", state: "date" },
      {
        label: "Essay Title",
        type: "text",
        name: "Essay Title",
        state: "title",
      },
      { label: "Details", type: "textarea", name: "Details", state: "details" },
      {
        label: "Upload file",
        type: "file",
        name: "Upload file",
        state: "file",
      },
    ],
  },
  {
    formName: "Add Congratulations",
    formTitle: "Congrats",
    formIcon: congratulations,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      {
        label: "Congratulations Title",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Details", type: "textarea", name: "Date", state: "date" },
      { label: "Date", type: "date", name: "Date", state: "date" },
      { label: "Upload file", type: "text", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Summery of Novel or book",
    formTitle: "Novel Summary",
    formIcon: summery,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      {
        label: "Novel or Book title",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Summary", type: "text", name: "Date", state: "date" },
      { label: "Learned Lessons", type: "text", name: "Date", state: "date" },
      { label: "Authors", type: "textarea", name: "Date", state: "date" },
      { label: "Novel or Book url", type: "url", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Add short story",
    formTitle: "Short Story",
    formIcon: shortStory,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      { label: "Story Title", type: "text", name: "Date", state: "date" },
      { label: "Story", type: "textarea", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Offer a commercial product",
    formTitle: "Offer Product",
    formIcon: product,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      { label: "Company Name", type: "text", name: "Date", state: "date" },
      { label: "Offer Details", type: "textarea", name: "Date", state: "date" },
      {
        label: "Email Or Phone number",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Announcing for an event",
    formTitle: "Event Announcement",
    formIcon: event,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      { label: "Organization", type: "text", name: "Date", state: "date" },
      { label: "Event Name", type: "text", name: "Date", state: "date" },
      { label: "Event Details", type: "textarea", name: "Date", state: "date" },
      { label: "Url", type: "url", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Official announcement",
    formTitle: "Official Announcement",
    formIcon: announcement,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      {
        label: "Announcement Title",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Organization Name", type: "text", name: "Date", state: "date" },
      { label: "Details", type: "textarea", name: "Date", state: "date" },
      { label: "Times", type: "text", name: "Date", state: "date" },
      { label: "Audience", type: "text", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Request for quotation",
    formTitle: "Request for Quotation",
    formIcon: quotation,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      { label: "Quotation Name", type: "text", name: "Date", state: "date" },
      { label: "Deadline", type: "date", name: "Date", state: "date" },
      {
        label: "Details and Conditions",
        type: "textarea",
        name: "Date",
        state: "date",
      },
      {
        label: "Email Or Phone Number",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },

  {
    formName: "Researcher Story",
    formTitle: "Researcher Story",
    formIcon: story,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      { label: "Researcher Name", type: "text", name: "Date", state: "date" },
      { label: "Description", type: "text", name: "Date", state: "date" },
      {
        label: "Advice for students",
        type: "text",
        name: "Date",
        state: "date",
      },
      {
        label: "Available projects",
        type: "text",
        name: "Date",
        state: "date",
      },
      {
        label: "Email or phone number",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Questionnaire",
    formTitle: "Questionnaire",
    formIcon: questionnaire,
    formFields: [
      { label: "Category", type: "select", name: "Date", state: "date" },
      {
        label: "Questionnaire Title",
        type: "text",
        name: "Date",
        state: "date",
      },
      {
        label: "Importance of questionnaire",
        type: "text",
        name: "Date",
        state: "date",
      },
      {
        label: "Questionnaire Type",
        type: "text",
        name: "Date",
        state: "date",
      },
      { label: "Organization", type: "text", name: "Date", state: "date" },
      { label: "Questionnaire url", type: "url", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Add Content",
    formTitle: "Add Content",
    formIcon: "",
    formFields: [
      { label: "Project Title", type: "text", name: "Date", state: "date" },
      { label: "Project Type", type: "text", name: "Date", state: "date" },
      { label: "Details", type: "textarea", name: "Date", state: "date" },
      { label: "Budget", type: "text", name: "Date", state: "date" },
      { label: "Delivery Time", type: "text", name: "Date", state: "date" },
      { label: "Upload file", type: "file", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Add Your Offer",
    formTitle: "Add Your Offer",
    formIcon: "",
    formFields: [
      { label: "Delivery Term", type: "text", name: "Date", state: "date" },
      { label: "Offer Value", type: "text", name: "Date", state: "date" },
      { label: "Your dues", type: "text", name: "Date", state: "date" },
      { label: "Details", type: "textarea", name: "Date", state: "date" },
    ],
  },
  {
    formName: "Add CV",
    formTitle: "Add CV",
    formIcon: "",
    formFields: [
      { label: "Name", type: "text", name: "Date", state: "date" },
      { label: "Age", type: "text", name: "Date", state: "date" },
      { label: "Job Title", type: "text", name: "Date", state: "date" },
      { label: "Skills", type: "text", name: "Date", state: "date" },
      { label: "Experience", type: "text", name: "Date", state: "date" },
      { label: "Upload CV", type: "file", name: "Date", state: "date" },
    ],
  },
];

export const categories = forms
  .filter((form) =>
    form.formFields.some((field) =>
      field.label.toLowerCase().includes("category")
    )
  )
  .map((form) => form.formName);

export const categoriesSorted = categories.sort((a, b) => a.localeCompare(b));

export const formsWithCategory = forms.map((form) => ({
  name: form.formName,
  icon: form.formIcon,
}));
