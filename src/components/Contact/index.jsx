import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "emailjs-com";

import Swal from "sweetalert2";

import "./styles.sass";

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  message: yup.string().required("O nome é obrigatório"),
});

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const Contact = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Toast.fire({
        icon: "success",
        title: "Email enviado com sucesso!",
      });

      reset();
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Por favor tente mais tarde.",
      });

      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Vamos conversar</h2>
        <p className="section-subtitle">Eu adoraria ouvir você!</p>

        <div className="contact-content">
          <div className="contact-text">
            <h3>Pronto para criar algo incrível juntos?</h3>
            <p>
              Quer você tenha um projeto em mente ou apenas queira dizer olá,
              estou sempre animado para me conectar com novas pessoas.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>kevendicamargo@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">🌍</span>
                <span>Guaiçara, São Paulo</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <>
                    <input type="text" placeholder="Seu nome ✨" {...field} />
                    <span>{errors.name && errors.name.message}</span>
                  </>
                )}
              />
            </div>

            <div className="form-group">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="email"
                      placeholder="Seu melhor email 📬"
                      {...field}
                    />
                    <span>{errors.email && errors.email.message}</span>
                  </>
                )}
              />
            </div>

            <div className="form-group">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                    placeholder="Conte-me sobre suas ideias! 💭"
                    rows="5"
                    {...field}
                  ></textarea>
                  <span>{errors.message && errors.message.message}</span>
                  </>
                )}
              />
            </div>

            <button type="submit" className="submit-btn">
              {isSubmitting ? "Enviando..." : "Enviar mensagem 🚀"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
