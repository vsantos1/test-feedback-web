package com.vsantos1.backend.resources;

import com.vsantos1.backend.dtos.ContactDTO;
import com.vsantos1.backend.model.Contact;
import com.vsantos1.backend.services.ContactService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1")
public class ContactResource {

    private final ContactService contactService;

    public ContactResource(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping(value = "/contacts")
    public ResponseEntity<List<Contact>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(contactService.findAll());
    }

    @PostMapping(value = "/contacts")
    public ResponseEntity<Contact> execute(@RequestBody ContactDTO contactDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(contactService.execute(contactDTO));
    }
    @DeleteMapping(value = "/contacts/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        contactService.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
