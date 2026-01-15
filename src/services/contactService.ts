/**
 * Contact Form Service
 * Handles contact form submission with mock API endpoint
 */

export interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  serviceType: string;
  preferredTime: string;
  description?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message: string;
}

/**
 * Submits contact form data to mock API endpoint
 * Simulates network request with artificial delay
 * 90% success rate, 10% random error for testing error states
 *
 * @param data Contact form data
 * @returns Promise with API response
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResponse<{ id: string; submittedAt: string }>> {
  try {
    // Simulate network delay (500-1000ms)
    const delay = Math.random() * 500 + 500;
    await new Promise((resolve) => setTimeout(resolve, delay));

    // 10% chance of random error for testing
    const shouldFail = Math.random() < 0.1;

    if (shouldFail) {
      return {
        success: false,
        error: "NETWORK_ERROR",
        message: "فشل في إرسال النموذج. يرجى المحاولة مرة أخرى.",
      };
    }

    // Success response with mock data
    const mockId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const submittedAt = new Date().toISOString();

    // Log form submission for debugging
    console.log("Contact form submitted:", {
      ...data,
      id: mockId,
      submittedAt,
    });

    return {
      success: true,
      data: {
        id: mockId,
        submittedAt,
      },
      message: "تم إرسال طلبك بنجاح. سنتواصل معك قريباً!",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: "UNKNOWN_ERROR",
      message: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقاً.",
    };
  }
}
