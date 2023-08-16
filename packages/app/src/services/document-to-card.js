import compact from "lodash/compact";

const isCopyAvailable = (copy) => {
  if (!copy) {
    return false;
  }

  const unavailableLocalisation = [
    "Réservé",
    "Prêté",
    "Document indisponible, acheminement en cours",
  ];
  return (
    copy.availableOn === "" &&
    !unavailableLocalisation.includes(copy.localisation)
  );
};
const isCopyUnavailable = (copy) => !isCopyAvailable(copy);

const typeToIcon = {
  livre: "fas fa-book",
  dvd: "fas fa-film",
  "audio-livre": "far fa-file-audio",
};

export function convert(favoriteDocuments, document) {
  console.log("convert");
  const isFavorite = !!favoriteDocuments.find(
    (favoriteDocument) => document.id === favoriteDocument.id
  );
  const favoriteActionIcon = isFavorite ? "favorite" : "favorite_border";
  const favoriteActionColor = isFavorite ? "red" : "gray";
  const typeIcon = typeToIcon?.[document.type] ?? "mdi-help-rhombus-outline";

  const availablesCopies = (compact(document?.copies) ?? []).filter(
    isCopyAvailable
  );
  const unavailablesCopies = (compact(document?.copies) ?? []).filter(
    isCopyUnavailable
  );
  const available = (document?.copies ?? []).some(isCopyAvailable);
  const availablesInLibraries = availablesCopies
    .map((copy) => copy.library)
    .join(", ");
  const availabilityColor = available ? "green" : "red";

  return {
    display: "summary",
    ...document,
    isFavorite,
    favoriteActionIcon,
    favoriteActionColor,
    typeIcon,
    availablesCopies,
    unavailablesCopies,
    available,
    availablesInLibraries,
    availabilityColor,
  };
}
