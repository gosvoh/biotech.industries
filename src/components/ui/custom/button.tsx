"use client";

import { cn } from "@/lib/utils";
import { Checkbox, Form, Input, Modal, Select } from "antd";
import React from "react";
import Party from "@public/Party.svg";
import Image from "next/image";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    showSelect?: boolean;
    title?: string;
  }
>(
  (
    { className, showSelect = true, title = "Обсудить проект", ...props },
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

    return (
      <>
        {context}
        <button
          className={cn(buttonClassName, className)}
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
                className: "bg-primary-white",
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
                    console.log(JSON.stringify(value, null, 2));
                    // form.resetFields();
                    modalForm.destroy();
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
                          boxShadow: "0px 5px 100px -50px hsl(var(--brand2))",
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
                          { label: "Разработка технологии", value: "tech" },
                          {
                            label: "Консультация для бизнеса",
                            value: "consultation",
                          },
                          {
                            label: "Курсы для биотех-специалистов",
                            value: "education",
                          },
                          { label: "Организация мероприятий", value: "events" },
                          { label: "Прочее", value: "rest" },
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
                      Я согласен с политикой конфиденциальности
                    </Checkbox>
                  </Form.Item>
                </Form>
              ),
            });
          }}
        >
          {title}
        </button>
      </>
    );
  }
);
Button.displayName = "Button";

export default Button;
