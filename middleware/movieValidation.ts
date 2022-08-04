import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O título precisa de no mínimo 3 caracteres."),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um número.")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa ser entre 0 a 10.");
        }
        return true;
      }),
    body("description").isString().withMessage("A descrição é obrigatória."),
    body("genre").isArray().withMessage("O gênero é obrigatório"),
    body("casting").isArray().withMessage("O elenco deve ter ao menos 1 ator"),
    body("release")
      .isNumeric()
      .withMessage("O ano de lançamento precisa ser um número.")
      .isLength({ min: 4 })
      .withMessage("O ano de lançamento deve ser um ano válido.")
      .custom((value: number) => {
        if (value < 1890 || value > 2099) {
          throw new Error("O ano de lançamento deve ser um ano válido.");
        }
        return true;
      }),
    body("director").isString().withMessage("O nome do diretor é obrigatório."),
    body("poster").isURL().withMessage("A imagem precisa ser uma URL."),
  ];
};
