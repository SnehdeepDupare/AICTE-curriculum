export default {
  name: "curriculum",
  title: "Curriculums",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Curriculum Year and Branch",
      type: "string",
    },

    {
      name: "curriculumFile",
      title: "Curriculum",
      description: "Upload Curriculum in PDF Format only!",
      type: "file",
    },
  ],
};
