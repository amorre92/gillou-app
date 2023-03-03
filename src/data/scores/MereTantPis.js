import MereTantPisMib from "../scores-mib/MereTantPisMib";
import MereTantPisSib from "../scores-sib/MereTantPisSib";

const MereTantPis = (tone) => {
    const sheetData = tone === "sib" ? MereTantPisSib() : MereTantPisMib();

   return (
        {
            id: 'mere-tant-pis',
            title: 'Mère tant pis',
            number: 15,
            clef: 'treble',
            timeSignature: '2/4',
            ...sheetData
        }
    )
}

export default MereTantPis