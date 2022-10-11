import { z } from "zod";

export const signUpSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "O campo nome é obrigatório",
    }),
    email: z
      .string({
        required_error: "O campo e-mail é obrigatório",
      })
      .email("E-mail inválido"),
    password: z
      .string({ required_error: "O campo senha é obrigatório" })
      .min(8, { message: "Senhas devem ser maiores que 8 caracteres" }),
  }),
});

export const signInSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "O campo e-mail é obrigatório",
      })
      .email("E-mail inválido"),
    password: z
      .string({ required_error: "O campo senha é obrigatório" })
      .min(8, { message: "Senhas devem ser maiores que 8 caracteres" }),
  }),
});

export const urlSchema = z.object({
  body: z.object({
    url: z.string({
      required_error: "O campo URL é obrigatório",
    }),
    description: z.string({
      required_error: "O campo descrição é obrigatório",
    }),
    title: z.string({
      required_error: "O campo título é obrigatório",
    }),
  }),
});

export const videoUrlSchema = z.object({
  body: z.object({
    url: z.string({
      required_error: "O campo URL é obrigatório",
    }),
    description: z.string({
      required_error: "O campo descrição é obrigatório",
    }),
    title: z.string({
      required_error: "O campo título é obrigatório",
    }),
  }),
});

export const textContentSchema = z.object({
  body: z.object({
    content: z.string({
      required_error: "Conteúdo é obrigatório",
    }),
    title: z.string({
      required_error: "O campo título é obrigatório",
    }),
  }),
});