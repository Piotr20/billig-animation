import React from "react";
import { useForm } from "react-hook-form";
import { graphql, useStaticQuery } from "gatsby";

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query ContactFormQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "contact-form" } } } }
        }
      ) {
        edges {
          node {
            id
            blocks {
              ... on WpCoreHeadingBlock {
                attributes {
                  ... on WpCoreHeadingBlockAttributes {
                    content
                  }
                }
                name
              }
              ... on WpContactForm7ContactFormSelectorBlock {
                saveContent
                name
                attributes {
                  title
                  id
                }
              }
              ... on WpCoreShortcodeBlock {
                saveContent
              }
            }
          }
        }
      }
    }
  `);

  const contactFormContent = data.allWpPost.edges[0].node.blocks;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <section className="container py-8 md:py-24">
      <h2 className="pr-8 md:pr-0">
        {contactFormContent[0].attributes.content}
      </h2>
      <div>
        <form
          className="w-full md:w-11/12 xl:w-5/6 container flex flex-col md:flex-row md:justify-between md:flex-wrap py-4 md:py-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-full md:w-1/2 p-2 md:p-4 md:pl-6 pl-4 my-2 md:my-3 text-black  text-lg md:text-xl xl:text-2xl bg-light-gray rounded-2xl md:rounded-3xl"
            {...register("firstName")}
            placeholder="Full Name or company name"
          />
          <input
            className="w-full md:w-2/5 p-2 md:p-4 md:pl-6 pl-4 my-2 md:my-3 text-black  text-lg md:text-xl xl:text-2xl bg-light-gray rounded-2xl md:rounded-3xl"
            {...register("lastName")}
            placeholder="Phone number"
          />
          <input
            className="w-full p-2 md:p-4 md:pl-6 pl-4 my-2 md:my-3 text-black  text-lg md:text-xl xl:text-2xl bg-light-gray rounded-2xl md:rounded-3xl"
            {...register("email")}
            placeholder="Email"
          />
          <textarea
            className="w-full p-2 md:p-4 md:pl-6 pl-4 my-2 md:my-3 h-40 md:h-60 xl:h-54 flex text-black  text-lg md:text-xl xl:text-2xl bg-light-gray rounded-2xl md:rounded-3xl"
            {...register("message")}
            placeholder="Message"
          />

          <button
            className="bg-black mt-4 text-lg md:text-xl xl:text-2xl self-center text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl md:rounded-3xl xl:rounded-4xl py-1 px-5 md:py-2 md:px-7 shadow-custom"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
