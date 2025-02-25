package khan.construction.backend.Backend.repository;  // ✅ Correct package

import khan.construction.backend.Backend.model.ContactForm;  // ✅ Correct import
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactFormRepository extends MongoRepository<ContactForm, String> {  // ✅ Extend MongoRepository
}
