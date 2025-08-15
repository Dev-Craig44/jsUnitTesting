// 3.) Import {defineConfig} from vitest/config
import { defineConfig } from "vitest/config";

// 4.) Call defineConfig() and pass it an object, and export it to a default object
export default defineConfig({
  // 5.) Set the test property to an object
  test: {
    // 6.) define our test parameters
    clearMocks: true,
  },
});
