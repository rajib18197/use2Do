import styles from "./TagList.module.css";

import Tag from "./Tag";

const colorPalettes = [
  { backgroundColor: "bg-red-600", textColor: "text-stone-50" },
  { backgroundColor: "bg-pink-600", textColor: "text-stone-50" },
  { backgroundColor: "bg-blue-600", textColor: "text-stone-50" },
  { backgroundColor: "bg-green-600", textColor: "text-stone-50" },
  { backgroundColor: "bg-purple-600", textColor: "text-stone-50" },
  { backgroundColor: "bg-orange-600", textColor: "text-stone-50" },
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
