import { Review, HALF_SECOND } from "../constants/global";
import { mockReviews } from "../constants/mockReviews";

class ApiService {
  private reviews: Review[] = mockReviews;

  private addDelay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async getReviews(): Promise<Review[]> {
    try {
      await this.addDelay(HALF_SECOND);
      return this.reviews;
    } catch (err) {
      throw new Error(`Failed to fetch reviews: ${err.message}`);
    }
  }

  async postReviews(newReview: Review): Promise<{ success: boolean }> {
    try {
      await this.addDelay(HALF_SECOND);
      this.reviews.push(newReview);
      return { success: true };
    } catch (err) {
      throw new Error(`Failed to post reviews: ${err.message}`);
    }
  }
}

export default new ApiService();
