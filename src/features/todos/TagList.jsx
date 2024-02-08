import styles from "./TagList.module.css";

import Tag from "./Tag";

const colorPalettes = [
  { backgroundColor: "--color-brand-700", textColor: "white" },
  { backgroundColor: "--color-indigo-700", textColor: "white" },
  { backgroundColor: "--color-green-700", textColor: "white" },
  { backgroundColor: "--color-silver-700", textColor: "white" },
  { backgroundColor: " --color-grey-700", textColor: "white" },
  { backgroundColor: "--color-red-700", textColor: "white" },
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
