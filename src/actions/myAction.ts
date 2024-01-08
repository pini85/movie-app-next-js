"use server";

export const myAction = async (term: String) => {
  console.log("my action", term);
};
export const myOtherAction = async (formData: any) => {
  console.log("my other action", formData);
  // const term = formData.get("search");
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // console.log("my other action", term);
  // return {
  //   term,
  // };
};
