"use client";
import { AutoComplete } from "@/components/meus-components/autocomplete";
import { AutocompleteDto, ContainerOpsSchemasDto } from "@repo/types";
import React, { useEffect, useState } from "react";

type InsereConteudoProps = {
  dadosDisponiveisParaInserir: ContainerOpsSchemasDto;
  unidades: AutocompleteDto[];
};

const InsereConteudo = ({
  dadosDisponiveisParaInserir,
  unidades,
}: InsereConteudoProps) => {
  const [unidadeFiltrada, setUnidadeFiltrada] = useState(unidades);

  const [selectedValue, setSelectedValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  //console.log("selectedValue :", selectedValue, " searchValue :", searchValue);
  useEffect(() => {
    // Ensure filtering accounts for cleared or partially cleared searchValue

    const filtered = unidades
      .filter(item => {
        // Filter by searchValue (case-insensitive)
        if (searchValue.trim()) {
          return item.label.toLowerCase().includes(searchValue.toLowerCase());
        }
        return true;
      })
      .map(item => ({
        value: item.value.toString(),
        label: item.label,
      }));

    setUnidadeFiltrada(filtered);
  }, [searchValue, selectedValue, unidades]);

  //console.log("dadosDisponiveisParaInserir: ", dadosDisponiveisParaInserir);

  return (
    <AutoComplete
      selectedValue={selectedValue}
      onSelectedValueChange={setSelectedValue}
      searchValue={searchValue}
      onSearchValueChange={setSearchValue}
      items={unidadeFiltrada}
      placeholder="Unidade"
      emptyMessage="Não tem unidade..."
    />
  );
};

export default InsereConteudo;
