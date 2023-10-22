export type AvatarType = "image";
export type AvatarSize = "xs" | "small" | "medium" | "large" | "xl" | "xxl";

export interface AvatarProps {
  src: string;

  type?: AvatarType;
  size?: AvatarSize;
}
