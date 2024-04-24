import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ContactInput from "./ContactInput";
import PaperPlane from "./PaperPlane";
import ContactSelect from "./ContactSelect";

export default function ContactModal({
  buttonText,
  variant,
  color,
  className,
  size,
  radius,
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const company = form.company.value;
    const email = form.email.value;
    const message = form.message.value;
    const phone = form.phone.value;
    const country = form.country.value;

    try {
      const docRef = await addDoc(collection(db, "Messages"), {
        firstname: firstname,
        lastname: lastname,
        company: company,
        email: email,
        message: message,
        phone: phone,
        country: country,
      });
      console.log("Document written with ID: ", docRef.id);
      form.reset();
      setLoading(false);
      onClose();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <Button
        className={className}
        variant={variant}
        color={color}
        size={size}
        onPress={onOpen}
        radius={radius}
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" placement="center" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center items-center text-2xl w-full">
                Contact us
              </ModalHeader>
              <ModalBody>
                <div className="card_form_container">
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 lg:gap-2 flex-col lg:flex-row">
                      <ContactInput
                        type="text"
                        id="firstname"
                        name="firstName"
                        placeholder="Enter your first name"
                        label="First Name*"
                        loading={loading}
                      />

                      <ContactInput
                        type="text"
                        id="lastname"
                        name="lastName"
                        placeholder="Enter your last name"
                        label="Last Name*"
                        loading={loading}
                      />
                    </div>

                    <div className="flex gap-4 lg:gap-2 flex-col lg:flex-row mt-1 lg:mt-0">
                      <ContactInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        label="Email*"
                        loading={loading}
                      />

                      <ContactInput
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter your company"
                        label="Company*"
                        loading={loading}
                      />
                    </div>
                    <div className="flex gap-4 lg:gap-2 flex-col lg:flex-row mt-1 lg:mt-0">
                      <ContactSelect loading={loading} />
                      <ContactInput
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        label="Phone*"
                        loading={loading}
                      />
                    </div>
                    <div className="form_group flex-col lg:flex-row">
                      <Textarea
                        isDisabled={loading}
                        classNames={{
                          input: ["bg-white"],
                          innerWrapper: ["bg-white"],
                          inputWrapper: ["bg-white"],
                          label: ["font-medium text-[16px] lg:text-md"],
                        }}
                        size="lg"
                        variant="bordered"
                        id="message"
                        name="message"
                        placeholder="Please leave us a brief description of your needs."
                        label="Message*"
                        labelPlacement="outside"
                      ></Textarea>
                    </div>
                    <div className="flex justify-end my-3 gap-2">
                      <Button
                        color="danger"
                        variant="light"
                        radius="lg"
                        onPress={onClose}
                        size="md"
                        className="text-md w-[6rem]"
                      >
                        Close
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        size="md"
                        radius="lg"
                        isLoading={loading}
                        className="bg-black text-md w-[7rem]"
                        endContent={<PaperPlane />}
                        spinner={
                          <svg
                            className="animate-spin h-5 w-5 text-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              fill="currentColor"
                            />{" "}
                          </svg>
                        }
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
