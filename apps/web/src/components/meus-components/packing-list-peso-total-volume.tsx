import React from "react";

type PackingListPesoTotalVolumeProps = {
  altura: number;
  peso: number;
};

const PackingListPesoTotalVolume = ({
  altura,
  peso,
}: PackingListPesoTotalVolumeProps) => {
  return (
    <p className="text-center text-xs">
      Volume total de la Pallet: {altura * 1.2 * 0.8} m&sup3; Poits total de la
      Pallet: {peso} kg
    </p>
  );
};

export default PackingListPesoTotalVolume;
