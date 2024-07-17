"use client";

import { cn } from "@/lib/utils";
import { Checkbox, Form, Input, Modal, Select } from "antd";
import React from "react";
import Party from "@public/Party.svg";
import Image from "next/image";
import onFormSubmit from "@/lib/form.action";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    showSelect?: boolean;
    title?: string;
    variant?: "default" | "link";
    course?: string;
  }
>(
  (
    {
      className,
      showSelect = true,
      title = "Обсудить проект",
      variant = "default",
      course,
      ...props
    },
    ref
  ) => {
    const [form] = Form.useForm();
    const [modal, context] = Modal.useModal();

    const buttonClassName = cn(
      "rounded-full",
      "px-10 py-5",
      "text-2xl md:text-3xl font-bold",
      "bg-primary-white text-primary-black",
      "transition-all duration-300",
      "hover:bg-brand2 hover:shadow-[2px_10px_20px_-5px_hsl(var(--brand2))]",
      "w-full md:w-fit"
    );

    const callErrorBtn = () => {
      const mod = modal.error({
        centered: true,
        icon: null,
        width: 600,
        styles: {
          content: {
            padding: 80,
            border: 1,
            borderColor: "hsl(var(--brand2))",
            borderStyle: "solid",
            boxShadow: "0px 5px 100px -50px hsl(var(--brand2))",
          },
        },
        footer: null,
        content: (
          <div className="fcol gap-10 text-center items-center justify-center w-full">
            <p className="form-title">Ошибка</p>
            <p className="as-text">
              Произошла ошибка при отправке формы
              <br />
              Попробуйте позже
            </p>
            <button className={buttonClassName} onClick={() => mod.destroy()}>
              Закрыть
            </button>
          </div>
        ),
      });
    };

    return (
      <>
        {context}
        <button
          className={cn(
            variant === "default"
              ? buttonClassName
              : "text-brand2 font-bold text-2xl underline inline-flex items-center gap-6",
            className
          )}
          ref={ref}
          {...props}
          onClick={() => {
            const modalForm = modal.confirm({
              title: <p className="form-title mb-8">{title}</p>,
              closable: true,
              maskClosable: true,
              centered: true,
              width: 600,
              okText: "Отправить",
              okButtonProps: {
                loading: false,
              },
              onOk: (_) => {
                form.submit();
              },
              icon: null,
              content: (
                <Form
                  className="w-full"
                  form={form}
                  onFinish={(value) => {
                    modalForm.update({
                      okButtonProps: {
                        loading: true,
                      },
                    });
                    form.resetFields();
                    onFormSubmit(
                      showSelect
                        ? value
                        : {
                            ...value,
                            type: `${title} ${value.type ?? course}`.trim(),
                          }
                    )
                      .then((val) => {
                        modalForm.destroy();
                        if (val.success) {
                          const mod = modal.success({
                            centered: true,
                            icon: null,
                            width: 600,
                            styles: {
                              content: {
                                padding: 80,
                                border: 1,
                                borderColor: "hsl(var(--brand2))",
                                borderStyle: "solid",
                                boxShadow:
                                  "0px 5px 100px -50px hsl(var(--brand2))",
                              },
                            },
                            footer: null,
                            content: (
                              <div className="fcol gap-10 text-center items-center justify-center w-full">
                                <Image src={Party} alt="" className="w-44" />
                                <p className="form-title">Спасибо!</p>
                                <p className="as-text">
                                  Мы свяжемся с вами в течение 1 рабочего дня
                                </p>
                                <button
                                  className={buttonClassName}
                                  onClick={() => mod.destroy()}
                                >
                                  Закрыть
                                </button>
                              </div>
                            ),
                          });
                        } else {
                          console.error(val.error);
                          callErrorBtn();
                        }
                      })
                      .catch((error) => {
                        console.error(error);
                        callErrorBtn();
                      })
                      .finally(() => {
                        modalForm.update({
                          okButtonProps: {
                            loading: false,
                          },
                        });
                      });
                  }}
                >
                  <Form.Item
                    name={"name"}
                    rules={[
                      { required: true, message: "Введите имя" },
                      {
                        min: 2,
                        message: "Имя должно содержать минимум 2 символа",
                      },
                    ]}
                  >
                    <Input placeholder="Имя" />
                  </Form.Item>
                  {showSelect && (
                    <Form.Item
                      name={"type"}
                      rules={[
                        {
                          required: true,
                          message: "Выберите услугу",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Выбрать услугу"
                        options={[
                          {
                            label: "Разработка технологии",
                            value: "Разработка технологии",
                          },
                          {
                            label: "Консультация для бизнеса",
                            value: "Консультация для бизнеса",
                          },
                          {
                            label: "Курсы для биотех-специалистов",
                            value: "Курсы для биотех-специалистов",
                          },
                          {
                            label: "Организация мероприятий",
                            value: "Организация мероприятий",
                          },
                          { label: "Прочее", value: "Прочее" },
                        ]}
                      />
                    </Form.Item>
                  )}
                  <Form.Item
                    name={"phone"}
                    rules={[
                      { required: true, message: "Введите телефон" },
                      {
                        min: 10,
                        message: "Телефон должен содержать минимум 10 символов",
                      },
                      {
                        pattern: /^\+?[0-9]+$/,
                        message: "Телефон должен содержать только цифры",
                      },
                    ]}
                  >
                    <Input type="tel" placeholder="Телефон" />
                  </Form.Item>
                  <Form.Item name={"comment"}>
                    <Input.TextArea
                      placeholder="Комментарий"
                      style={{ resize: "none" }}
                    />
                  </Form.Item>
                  <Form.Item
                    name={"agreement"}
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject("Необходимо согласие"),
                      },
                    ]}
                  >
                    <Checkbox>
                      Я согласен с{" "}
                      <Link
                        href="/personal_data_policy.pdf"
                        target="_blank"
                        className="text-brand2 hover:text-brand2/80 hover:underline"
                      >
                        политикой конфиденциальности
                      </Link>
                    </Checkbox>
                  </Form.Item>
                </Form>
              ),
            });
          }}
        >
          {variant === "link" && <ExternalLinkIcon />}
          {title}
        </button>
      </>
    );
  }
);
Button.displayName = "Button";

export default Button;
