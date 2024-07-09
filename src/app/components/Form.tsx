// components/Form.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("hello world");

    try {
      const query = new URLSearchParams(formData as unknown as Record<string, string>).toString();
      const response = await fetch(`/api/add-people?${query}`);

      const result = await response.json();
      if (result.status = 200) {
        console.log("Form submitted successfully!");
        setSuccess(true);
      } else {
        console.log("Form submission failed.");
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
    }
  };

  return (
    <div>
      {success === true && (
        <div className="text-green-600 mb-4">Form submitted successfully!</div>
      )}
      {success === false && (
        <div className="text-red-600 mb-4">Form submission failed. Please try again.</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 w-full md:w-3/4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full"
          required
        />
        <button type="submit" className="text-3xl btn p-4 text-green-800 w-full">
          Join the waitlist
        </button>
      </form>
    </div>
  );
}

export default Form;