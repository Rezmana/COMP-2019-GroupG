<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class UserLogin extends Authenticatable
{
    use Notifiable;

    public $timestamps = false;

    protected $table = 'userlogin';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'UserID',
        'Username',
        'Password',
        'Email'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'Password'
    ];

    protected $casts = [
        'Password' => 'hashed',
    ];

    public function setPasswordAttribute($password) 
    {
        $this->attributes['Password'] = bcrypt($password);
    }

    //these are all overrides of the Authenticatable.php   
    public function getAuthPassword()
    {
        return $this->attributes['Password'];
    }
    
    public function getAuthIdentifierName()
    {
        return 'UserID';
    }

    public function getAuthIdentifier()
    {
        return $this->attributes['UserID'];
    }

    /**
     * The column name of the "remember me" token.
     *
     * @var string
     */
    protected $rememberTokenName = '';

    /**
     * Get the unique broadcast identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifierForBroadcasting()
    {
        return $this->getAuthIdentifier();
    }

    /**
     * Get the token value for the "remember me" session.
     *
     * @return string|null
     */
    public function getRememberToken()
    {
        if (! empty($this->getRememberTokenName())) {
            return (string) $this->{$this->getRememberTokenName()};
        }
    }

    /**
     * Set the token value for the "remember me" session.
     *
     * @param  string  $value
     * @return void
     */
    public function setRememberToken($value)
    {
        if (! empty($this->getRememberTokenName())) {
            $this->{$this->getRememberTokenName()} = $value;
        }
    }

    /**
     * Get the column name for the "remember me" token.
     *
     * @return string
     */
    public function getRememberTokenName()
    {
        return $this->rememberTokenName;
    }
}