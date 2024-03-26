import axios from "axios";

export async function getMusicListFromTencentDoc() {
  return await axios
    .get("/tencentDoc")
    .then((response: any) => {
      const resp = response.data as string;
      const docContent = resp
        .substring(resp.indexOf("\\u001d\\u001e\\u001c"), resp.lastIndexOf("\\u001d\\u001e"))
        .replace(/\\u001d\\u001e\\u001c/g, "")
        .replace(/\\u001d\\u001e/g, "");
      const musicSortedByType = docContent.split("\\u001d\\u001c").map((rawMusicStr: string) => {
        const musicList = rawMusicStr
          .replace(/(\\r)\1+/g, "\\r")
          .replace(/^(\\r)+|(\\r)+$/g, "")
          .replace(/\\u0005/g, "")
          .split("\\r");
        return musicList;
      });
      const musicList = musicSortedByType
        .map((musics: string[], index: number) => {
          const label = [getMusicLabelByIdx(index)];
          return musics.map((musicName: string) => {
            return {
              name: musicName,
              singer: "-",
              label: label,
              remark: "-"
            };
          });
        })
        .flatMap((musicList: any) => musicList);
      return musicList;
    })
    .catch((error: any) => console.error("Error fetching JSON:", error));
}

function getMusicLabelByIdx(index: number): string {
  switch (index) {
    case 0:
      return "ACG";
    case 1:
      return "VOCALOID";
    case 2:
      return "J-POP";
    case 3:
      return "大友歌";
    case 4:
      return "爱马仕";
    case 5:
      return "拉拉";
    case 6:
      return "中文";
    case 7:
      return "英文";
    default:
      return "未知";
  }
}
