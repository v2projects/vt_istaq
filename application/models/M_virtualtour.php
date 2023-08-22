<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_virtualtour extends CI_Model
{
    public function getVirtualTour()
    {
        $this->db->select('*');
        $this->db->from('virtualtour');
        $query = $this->db->get();
        return $query->result();
    }

    public function getAdmin()
    {
        $this->db->select('*');
        $this->db->from('admin');
        $query = $this->db->get();
        return $query->result();
    }

    public function InsertDatavt($data)
    {
        $this->db->insert('virtualtour', $data);
    }

    public function EditDatavt($data, $id_virtualtour)
    {
        $this->db->where('id_virtualtour', $id_virtualtour);
        $this->db->update('virtualtour', $data);
    }

    public function getDataVTedit($id_virtualtour)
    {
        $this->db->where('id_virtualtour', $id_virtualtour);
        $query = $this->db->get('virtualtour');
        return $query->row();
    }

    public function DeleteDatavt($id_virtualtour)
    {
        $this->db->where('id_virtualtour', $id_virtualtour);
        $this->db->delete('virtualtour');
    }

    public function getDataVTdelete($id_virtualtour)
    {
        $this->db->where('id_virtualtour', $id_virtualtour);
        $query = $this->db->get('virtualtour');
        return $query->row();
    }
}
