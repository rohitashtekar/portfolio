import '../styles/projects/coffeeOrder.css';

const CoffeeOrder = () => {
  return (
    <>
      <section className="container-fluid project-detail-cont">
        <div className="project-details">
          <p>
            I developed a Coffee Order Application designed to streamline the ordering process at restaurants, allowing customers to place their beverage orders directly from their smartphones, thus eliminating the need to wait for a waiter to take their order. This Android-based application offers a small, curated menu of beverages, which includes a selection of coffee, tea, and other hot drinks, providing customers with a convenient and efficient way to browse the available options and make their selection.
          </p>
          <p>
            The primary goal of this application was to enhance the dining experience by speeding up the ordering process and reducing the wait time for both customers and staff. With the Coffee Order App, users can view the menu, select their desired beverages, and place their order directly through the application. Once the order is placed, the manager receives an automatic email notification with the details of the order, which can be quickly processed and delivered to the table.
          </p>
          <p>
            For the user interface (UI), I used XML in Android Studio, focusing on creating a clean, intuitive design that allows users to navigate the app effortlessly. The UI includes features such as:
          </p>
          <p>
            Menu Display: A simple yet attractive menu layout, showcasing the list of beverages with images and prices.
          </p>
          <p>
            Order Customization: Users can customize their drinks by selecting options such as size, milk type, or additional flavors.
          </p>
          <p>
            Order Confirmation: After placing the order, users receive a confirmation screen showing the details of their selection, along with the expected time of delivery.
          </p>
          <p>
            I took great care to ensure the design was responsive and suitable for a wide range of Android devices, focusing on usability and user experience. The overall aim was to make the ordering process as seamless as possible, with a clean interface and minimal steps to place an order.
          </p>
          <p>
            On the backend, I used Java programming language to build the logic for handling user orders, storing session data, and integrating with the email notification system. When an order is submitted, the app generates a structured order message and sends it to the restaurant manager’s email using Java's email libraries. This eliminates the need for manual order tracking and ensures that the kitchen staff is immediately informed of new orders. Additionally, the app handles order status updates, allowing the manager to track which orders are ready for delivery and which are still pending.
          </p>
          <p>
            This project also required me to implement basic order management functionality, including storing the orders in a temporary session and allowing for modifications or cancellations before the order is finalized.
          </p>
          <p>
            Key features and functionalities of the app include:
          </p>
          <p>
            - Email Notification System: Real-time email alerts sent to the manager as soon as an order is placed.
          </p>
          <p>
            - Order Summary: A detailed review of the order before final submission.
          </p>
          <p>
            - Dynamic Menu: The ability to modify or add new items to the menu as needed.
          </p>
          <p>
            This project gave me hands-on experience in mobile application development, backend integration, and UI/UX design, while also teaching me valuable skills in handling real-time notifications and integrating email services in a mobile app. It significantly improved my understanding of how technology can streamline everyday tasks in a restaurant setting and enhance the overall customer experience.
          </p>
          <hr />
          <p>Technology Stack: Java, XML, Android Studio.</p>
        </div>
      </section>
    </>
  )
}

export default CoffeeOrder