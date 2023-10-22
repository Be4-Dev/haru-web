// Third-party modules
import classnames from "classnames";

// Local modules
import type { AvatarProps } from "./Avatar.types";
import styles from "./Avatar.module.scss";

export const Avatar = ({
  src,
  type = "image",
  size = "medium",
}: AvatarProps) => {
  return (
    <div className={classnames(styles.Avatar, { [styles.xs]: size === "xs" })}>
      <img src={src} alt="avatar" />
    </div>
  );
};
