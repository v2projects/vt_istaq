<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Auth extends CI_Controller
{
    public function index()
    {
        $data['vt'] = $this->db->query("SELECT * FROM virtualtour where thumnail != '' and ext != 0")->result_array();
        $this->load->view('auth/landing', $data);
    }
}
