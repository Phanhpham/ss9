"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      // bai1 
      <div className="p-6 flex gap-4">
        <Button variant="destructive">Destructive</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="large">Size large</Button>
        <Button variant="small">Size small</Button>
      </div>
      // bai2

      <div className="p-6">
        <Input type="text" className="my-3" placeholder="Rikkei Academy" />
        <Input type="number" className="my-3" placeholder="10" />
        <Input type="file" className="my-3" placeholder="10" />
      </div>
      // bai 3
      <Breadcrumb className="p-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/listProduct">
              List product
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/order">Order</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/orderDetail">
              Order detail
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    // bai4
      <div className="p-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Môn học" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Môn học</SelectLabel>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javaScript">JavaScript</SelectItem>
              <SelectItem value="reactJS">ReactJS</SelectItem>
              <SelectItem value="nextjs">Next.js</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      // bai 5
      <div className="p-6">
        <b>Mã xác nhận</b>
        <InputOTP maxLength={8}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="p-6">
        <b>Mã xác nhận</b>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      // bai 6
      <div className="p-6">
        <Slider defaultValue={[60]} max={100} step={1} className="w-64" />
        <p>Value : 60</p>
      </div>
      <div className="p-6">
        <Slider defaultValue={[82]} max={100} step={1} className="w-64" />
        <p>Value : 82</p>
      </div>
    </div>
  );
}
