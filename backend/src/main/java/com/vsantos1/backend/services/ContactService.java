package com.vsantos1.backend.services;

import com.vsantos1.backend.dtos.ContactDTO;
import com.vsantos1.backend.mapper.Mapper;
import com.vsantos1.backend.model.Contact;
import com.vsantos1.backend.repositories.ContactRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    private final ContactRepository contactRepository;
    private final Mapper mapper;

    public ContactService(ContactRepository contactRepository, Mapper mapper) {
        this.contactRepository = contactRepository;
        this.mapper = mapper;
    }

    public List<Contact> findAll(){
        return contactRepository.findAll();
    }
    public Contact findById(Long id){
        Optional<Contact> optionalContact = contactRepository.findById(id);
        if (optionalContact.isPresent()){
            return optionalContact.get();
        }
        throw new ResourceNotFoundException("Contact not found");

    }
    public Contact execute(ContactDTO contactDTO) {
        Contact contact = new Contact();

        mapper.mapperBean().map(contactDTO, contact);
        contact.setCreatedAt(new Date());
        return contactRepository.save(contact);
    }

    public void delete(Long id){
        Contact contact = this.findById(id);
        contactRepository.deleteById(contact.getId());
    }
}
