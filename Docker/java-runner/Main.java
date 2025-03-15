import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder code = new StringBuilder();

        while (scanner.hasNextLine()) {
            code.append(scanner.nextLine()).append("\n");
        }

        scanner.close();

        try {
            System.out.println("Java Execution Successful!");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
