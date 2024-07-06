"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "antd";
import { Checkbox as ShadCheckbox } from "@/components/ui/checkbox";
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "text-xl md:text-3xl p-6 bg-transparent border border-white text-white",
        "w-full",
        "hover:border-brand2 focus:border-brand2 focus:bg-brand2",
        "focus:text-black",
        "transition-all duration-300",
        "placeholder:font-bold placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "text-xl md:text-3xl p-6 bg-transparent border border-white text-white",
        "w-full",
        "hover:border-brand2 focus:border-brand2 focus:bg-brand2",
        "focus:text-black",
        "transition-all duration-300",
        "resize-none",
        "placeholder:font-bold placeholder:text-muted-foreground",
        className
      )}
      rows={1}
      {...props}
    />
  );
});

const Checkbox = ({
  checked,
  onChange,
}: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) => {
  return (
    <label
      className={cn(
        "flex flex-row gap-4 items-center text-xl md:text-3xl cursor-pointer",
        "text-white/60 hover:text-white",
        "transition-all duration-300",
        checked && "text-white"
      )}
    >
      <ShadCheckbox checked={checked} onCheckedChange={onChange} />Я согласен с
      политикой конфиденциальности
    </label>
  );
};

const Select = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const className = "text-xl md:text-3xl p-6 bg-secondary";

  return (
    <ShadSelect value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "text-xl md:text-3xl p-6 bg-transparent border border-white text-white",
          "rounded-none h-auto"
        )}
      >
        <SelectValue className="bg-white p-6 placeholder:font-bold" />
      </SelectTrigger>
      <SelectContent className="space-y-2">
        <SelectItem className={className} value="tech">
          Разработка технологии
        </SelectItem>
        <SelectItem className={className} value="consultation">
          Консультация для бизнеса
        </SelectItem>
        <SelectItem className={className} value="education">
          Курсы для биотех-специалистов
        </SelectItem>
        <SelectItem className={className} value="events">
          Организация мероприятий
        </SelectItem>
        <SelectItem className={className} value="rest">
          Прочее
        </SelectItem>
      </SelectContent>
    </ShadSelect>
  );
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const [form] = Form.useForm();

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
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn(buttonClassName, className)} ref={ref} {...props}>
          Обсудить проект
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] w-[95%] lg:w-full overflow-y-scroll max-h-[90vh] space-y-[80px] md:space-y-[180px] px-10 py-20">
        <DialogHeader className="flex flex-row justify-between items-center">
          <DialogTitle className="text-3xl md:text-5xl">
            Обсудить проект
          </DialogTitle>
          <DialogClose>
            <X className="w-10 h-10" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <Form
          className="w-full space-y-16 md:space-y-[80px]"
          form={form}
          onFinish={(value) => {
            console.log(JSON.stringify(value, null, 2));
          }}
        >
          <Form.Item
            name={"name"}
            rules={[
              { required: true, message: "Введите имя" },
              { min: 2, message: "Имя должно содержать минимум 2 символа" },
            ]}
          >
            <Input type="text" placeholder="Имя" />
          </Form.Item>
          <Form.Item name={"type"} initialValue="rest">
            <Select />
          </Form.Item>
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
            <TextArea placeholder="Комментарий" />
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
            <Checkbox />
          </Form.Item>
        </Form>
        <DialogFooter className="md:mx-auto">
          <button className={buttonClassName} onClick={() => form.submit()}>
            Отправить
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
Button.displayName = "Button";

export default Button;
