import PostillonDeLongjumeauMib from "../scores-mib/PostillonDeLongjumeauMib";
import PostillonDeLongjumeauSib from "../scores-sib/PostillonDeLongjumeauSib";

const PostillonDeLongjumeau = (tone) => {
  const sheetData =
    tone === "sib" ? PostillonDeLongjumeauSib() : PostillonDeLongjumeauMib();

  return {
    id: "postillon-de-longjumeau",
    title: "Le postillon de Longjumeau",
    number: 3,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default PostillonDeLongjumeau;
