<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Login_model', 'mlogin');
    }

    public function index()
    {
        $this->load->view('login/login');
    }

    public function validation()
    {
        $this->load->library('session');
        $username = $this->input->post('username');
        $password = $this->input->post('password');

        $cek = $this->mlogin->validation_login($username, $password)->num_rows();

        if ($cek > 0) {

            $row = $this->mlogin->validation_login($username, $password)->row_array();

            $array = array(
                'id_admin' => $row['id_admin'],
                'nama' => $row['nama'],
                'username' => $row['username'],
                'image' => $row['image']
            );

            $this->session->set_userdata($array);

            redirect('admin');
        } else {
            echo "username dan password tidak ditemukan";
        }
    }

    public function logout()
    {
        $array = array(
            'id_admin' => '',
            'nama' => '',
            'username' => '',
            'image' => ''
        );
        $this->session->unset_userdata($array);
        redirect('login');
    }
}

/* End of file Login.php and path \application\controllers\Login.php */
