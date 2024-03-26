export type MusicData = {
  name: string;
  singer: string;
  label: string[];
  remark: string;
};

export enum MusicLabel {
  ACG = "ACG",
  VOCALOID = "VOCALOID",
  JPOP = "J-POP",
  大友歌 = "大友歌",
  爱马仕 = "爱马仕",
  拉拉 = "拉拉",
  中文 = "中文",
  英文 = "英文"
}
