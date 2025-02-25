package khan.construction.backend.Backend.model;

public class ContactForm {
    private String id;
    private String fullName;
    private String mobileNumber;

    // Constructor
    public ContactForm(String id, String fullName, String mobileNumber) {
        this.id = id;
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getMobileNumber() { return mobileNumber; }
    public void setMobileNumber(String mobileNumber) { this.mobileNumber = mobileNumber; }

    // toString Method
    @Override
    public String toString() {
        return "ContactForm{id='" + id + "', fullName='" + fullName + "', mobileNumber='" + mobileNumber + "'}";
    }
}
