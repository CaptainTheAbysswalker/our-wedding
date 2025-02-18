"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Model, SurveyModel } from "survey-core";
import { LayeredLightPanelless } from "survey-core/themes";
import { Survey } from "survey-react-ui";
import model from "./helers/formModel.json";
import { useTelegram } from "@/lib/useTelegram";

export const Form = ({
  guest,
  handleCloseModal,
}: {
  guest: string;
  handleCloseModal: () => void;
}) => {
  const [formModel, setFormModel] = useState({});

  const { sendMessage } = useTelegram();

  const surveyComplete = useCallback(
    async ({ data }: SurveyModel) => {
      let message = `Форма от гостя: ${guest}%0A%0AПотребуется ли трансфер: ${data["transfer"]}`;

      if (data["alco"]) {
        const alco =
          typeof data["alco"] === "string"
            ? data["alco"]
            : data["alco"].join(", ");
        message += `%0AАлкоголь: ${alco}`;
      }

      if (data["restrictions"]) {
        message += `%0AОграничения в еде: ${data["restrictions"]}`;
      }

      if (data["withChild"] || data["withChild"] === false) {
        message += `%0AС детьми: ${data["withChild"] ? 'Да' : 'Нет'}`;
      }

      await sendMessage(message);
      handleCloseModal();
    },
    [sendMessage]
  );

  useEffect(() => {
    setFormModel(model);
  }, []);

  if (!formModel) {
    return null;
  }

  const survey = new Model(formModel);
  survey.applyTheme(LayeredLightPanelless);
  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
};
