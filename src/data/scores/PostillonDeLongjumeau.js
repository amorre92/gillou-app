import { POSTILLOU_DE_LONGJUMEAU_ID } from "../ScoreIdentifiers";
import PostillonDeLongjumeauMib from "../scores-mib/PostillonDeLongjumeauMib";
import PostillonDeLongjumeauSib from "../scores-sib/PostillonDeLongjumeauSib";

const PostillonDeLongjumeau = (tone) => {
  const sheetData =
    tone === "sib" ? PostillonDeLongjumeauSib() : PostillonDeLongjumeauMib();

  return {
    ...POSTILLOU_DE_LONGJUMEAU_ID,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default PostillonDeLongjumeau;
