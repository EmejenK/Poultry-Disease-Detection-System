import newcastleDiseaseImg from "../images/newcastle-disease.jpg";
import avianInfluenzaImg from "../images/avian-influenza.jpg";
import infectiousBronchitisImg from "../images/infectious-bronchitis.jpg";
import coccidiosisImg from "../images/coccidiosis.jpg";
import mareksDiseaseImg from "../images/mareks-disease.jpg";
import fowlPoxImg from "../images/fowl-pox.jpg";
import eggDropSyndromeImg from "../images/egg-drop-syndrome.jpg";
import gumboroDiseaseImg from "../images/gumboro-disease.jpg";
import salmonellosisImg from "../images/salmonellosis.png";

export const diseases = [
  {
    id: "01",
    name: "Newcastle Disease",
    characteristics: "Respiratory, nervous, and digestive symptoms.",
    preventiveMeasures: "Strict biosecurity, proper vaccination.",
    vaccines: "B1 Type, LaSota Strain Vaccine.",
    photo: newcastleDiseaseImg,
  },
  {
    id: "02",
    name: "Avian Influenza",
    characteristics: "Respiratory distress, drop in egg production.",
    preventiveMeasures: "Biosecurity, surveillance, vaccination.",
    vaccines: "Aflunov Vaccine.",
    photo: avianInfluenzaImg,
  },
  {
    id: "03",
    name: "Infectious Bronchitis",
    characteristics: "Respiratory symptoms, decreased egg quality.",
    preventiveMeasures: "Biosecurity, vaccination.",
    vaccines: "Live-attenuated and inactivated IBV Vaccine.",
    photo: infectiousBronchitisImg,
  },
  {
    id: "04",
    name: "Coccidiosis",
    characteristics: "Diarrhea, weight loss.",
    preventiveMeasures: "Clean environment, coccidiostats in feed.",
    vaccines: "Tenella, E. necatrix and E. brunetti.",
    photo: coccidiosisImg,
  },
  {
    id: "05",
    name: "Marek's Disease",
    characteristics: "Tumors, paralysis.",
    preventiveMeasures: "Vaccination, strict biosecurity.",
    vaccines: "CVI988/Rispens Vaccine.",
    photo: mareksDiseaseImg,
  },
  {
    id: "06",
    name: "Fowl Pox",
    characteristics: "Skin lesions, respiratory symptoms.",
    preventiveMeasures: "Mosquito control, vaccination.",
    vaccines: "Live virus Vaccine.",
    photo: fowlPoxImg,
  },
  {
    id: "07",
    name: "Egg Drop Syndrome",
    characteristics: "Drop in egg production, soft-shelled eggs.",
    preventiveMeasures: "Biosecurity, vaccination.",
    vaccines: "EDS Vaccine.",
    photo: eggDropSyndromeImg,
  },
  {
    id: "08",
    name: "Gumboro Disease",
    characteristics: "Immunosuppression, increased mortality.",
    preventiveMeasures: "Biosecurity, vaccination.",
    vaccines: "IBD Vaccine.",
    photo: gumboroDiseaseImg,
  },
];
