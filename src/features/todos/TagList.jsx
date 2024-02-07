import styles from "./TagList.module.css";

import Tag from "./Tag";

const colorPalettes = [
  { backgroundColor: "--color-brand-600", textColor: "white" },
  { backgroundColor: "--color-indigo-100", textColor: "white" },
  { backgroundColor: "--color-green-100", textColor: "white" },
  { backgroundColor: "--color-silver-100", textColor: "black" },
  { backgroundColor: " --color-grey-900", textColor: "black" },
  { backgroundColor: "--color-red-700", textColor: "black" },
];

export default function TagsList({ tags }) {
  const tagsContent = tags.map((tag, i) => {
    const random =
      colorPalettes[Math.trunc(Math.random() * colorPalettes.length)];

    const bgColor = random.backgroundColor;
    const textColor = random.textColor;

    return (
      <Tag bgColor={bgColor} textColor={textColor} key={tag}>
        {tag}
      </Tag>
    );
  });

  return <ul className={styles.tagList}>{tagsContent}</ul>;
}
