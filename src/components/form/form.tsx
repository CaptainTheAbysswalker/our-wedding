"use client";

import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { LayeredLightPanelless } from "survey-core/themes";
import { Survey } from "survey-react-ui";
import model from './helers/formModel.json'

export const Form = ({ id }: { id?: string }) => {
  const [formModel, setFormModel] = useState({});

  useEffect(() => {
    setFormModel(model);
  }, []);
  console.log(id);
  if (!formModel) {
    return null;
  }

  const survey = new Model(formModel);
  survey.applyTheme(LayeredLightPanelless);

  return <Survey model={survey} />;
};
