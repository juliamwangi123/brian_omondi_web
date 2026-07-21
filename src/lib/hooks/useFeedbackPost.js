import { useState } from "react";
import emailjs from "emailjs-com";

export function useFeedbackSubmit() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitFeedback = async (formData, { onSuccess, onError }) => {
    setIsPending(true);
    setIsError(false);

    try {
      // Initialize EmailJS (make sure to replace with your public key)
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key");

      // Send email via EmailJS
      const emailResponse = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id",
        {
          to_email: "hello@brian-omondi.com",
          from_name: formData.name,
          from_email: "noreply@brian-omondi.com",
          ward: formData.ward,
          message: formData.message,
          reply_to: "hello@brian-omondi.com",
        }
      );

      console.log("Email sent:", emailResponse);

      // COMMENTED OUT: Original endpoint submission
      /*
      const endpointResponse = await fetch("your_endpoint_here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          ward: formData.ward,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!endpointResponse.ok) {
        throw new Error("Failed to submit to endpoint");
      }

      const endpointData = await endpointResponse.json();
      console.log("Endpoint response:", endpointData);
      */

      setIsPending(false);
      onSuccess();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setIsPending(false);
      setIsError(true);
      onError(error);
    }
  };

  return {
    submitFeedback,
    isPending,
    isError,
  };
}
