import { Review } from "../constants/model";
import { HALF_SECOND } from "../constants/global";
import { mockReviews } from "../constants/mockReviews";

class ApiService {
  private reviews: Review[] = mockReviews;

  private addDelay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async getReviews(): Promise<Review[]> {
    try {
      await this.addDelay(HALF_SECOND);
      return this.reviews;
    } catch (err) {
      throw new Error(
        `Failed to fetch reviews: ${err instanceof Error ? err.message : err}`
      );
    }
  }

  async postReviews(newReview: Review): Promise<{ success: boolean }> {
    try {
      await this.addDelay(HALF_SECOND);
      this.reviews.push(newReview);
      return { success: true };
    } catch (err) {
      throw new Error(
        `Failed to post reviews: ${err instanceof Error ? err.message : err}`
      );
    }
  }
}

export default new ApiService();
