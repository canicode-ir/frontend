"use client";

//Components
import CourseTitlesAccordion from "../../../../elements/CouresTitlesAccordion";

function CourseTitles({ data }) {
  return (
    <ul className="flex flex-col w-full justify-center items-center bg-inherit">
      {data.map((item) => (
        <CourseTitlesAccordion key={item.title} {...item} />
      ))}
    </ul>
  );
}

export default CourseTitles;
