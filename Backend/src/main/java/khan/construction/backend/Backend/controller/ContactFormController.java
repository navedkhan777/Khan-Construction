package khan.construction.backend.Backend.controller;  // ✅ Correct package

import khan.construction.backend.Backend.model.ContactForm;  // ✅ Correct import
import khan.construction.backend.Backend.repository.ContactFormRepository;  // ✅ Correct import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactFormController {

    @Autowired
    private ContactFormRepository repository;  // ✅ Now correctly injected

    @PostMapping("/submit")
    public ContactForm submitForm(@RequestBody ContactForm form) {
        return repository.save(form);
    }
}
